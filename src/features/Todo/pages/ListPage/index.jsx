import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'code',
      status: 'new',
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilterStatus(params.status || 'all');
  }, [location.search]);

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };

    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    const queryParams = {status: 'all'};
    history.push({
        pathname: match.path,
        search: queryString.stringify(queryParams),
    });
  };

  const handleShowCompletedClick = () => {
    const queryParams = {status: 'completed'};
    history.push({
        pathname: match.path,
        search: queryString.stringify(queryParams),
    });
  };

  const handleShowNewClick = () => {
    const queryParams = {status: 'new'};
    history.push({
        pathname: match.path,
        search: queryString.stringify(queryParams),
    });
  };

  const renderTodoList = useMemo(() => {
    return todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status);
  }, [todoList, filterStatus]);

  const handleTodoFormSubmit = (value) => {
    console.log('Form submit: ', value);
    const newTodo = {
      id: todoList.length + 1,
      title: value.title,
      status: 'new',
    };
    
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
