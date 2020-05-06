import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState([]);
  const [repositories, setRepositories] = useState([]);

  function handleAddRepository() {}

  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/47464308?s=460&u=5890ff4d153c12394ee8c7902fb5f69f2f4ffdd9&v=4"
            alt="Tales Habib"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Repositorio React com Typescript</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/47464308?s=460&u=5890ff4d153c12394ee8c7902fb5f69f2f4ffdd9&v=4"
            alt="Tales Habib"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Repositorio React com Typescript</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/47464308?s=460&u=5890ff4d153c12394ee8c7902fb5f69f2f4ffdd9&v=4"
            alt="Tales Habib"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Repositorio React com Typescript</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
