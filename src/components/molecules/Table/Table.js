import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Text } from "../../atoms/Text";

const Table = ({ articles, onChange }) => {
  const [pageActive, setPageActive] = useState(0);
  const pageNumbers = [];
  const [art, setArt] = useState([...articles].slice(0, 6));

  useEffect(() => {
    getPageNumbers();
  }, []);

  const changeStep = (id) => {
    if (id < 0) return;
    const firstIndex = id * 6;
    if (firstIndex > articles.length) return;
    setArt([...articles].slice(firstIndex, firstIndex + 6));
    setPageActive(id);
  };

  const getDateTable = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (month < 10 && day < 10) {
      return `0${day}-0${month}-${year}`;
    } else if (month < 10) {
      return `${day}-0${month}-${year}`;
    } else if (day < 10) {
      return `0${day}-${month}-${year}`;
    }

    return `${day}-${month}-${year}`;
  };

  const getPageNumbers = () => {
    const totalPages = articles.length / 6;

    for (let i = 1; i <= Math.ceil(totalPages); i++) {
      pageNumbers.push(i);
    }
  };

  return (
    <>
      <TableContainer>
        <thead>
          <tr>
            <th>AUTHOR NAME</th>
            <th>TITLE</th>
            <th>CONTENT</th>
            <th>DATE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {art.map((art, idx) => (
            <tr key={idx} id={idx}>
              <td>{art.author}</td>
              <td>{art.title}</td>
              <td>{art.content}</td>
              <td>{getDateTable(art.date)}</td>
              <td>
                <TextLink tag="a" onClick={() => onChange(art.id)}>
                  Edit
                </TextLink>
              </td>
            </tr>
          ))}
        </tbody>
      </TableContainer>
      <Hr />
      <Pagination>
        <Previous>
          <TextStep
            tag="a"
            onClick={() => changeStep(pageActive - 1)}
          >{`<-- Previous`}</TextStep>
        </Previous>
        <Steps>{pageNumbers.map((number, idx) => console.log(number))}</Steps>
        <Next>
          <TextStep
            tag="a"
            onClick={() => changeStep(pageActive + 1)}
          >{`Next -->`}</TextStep>
        </Next>
      </Pagination>
    </>
  );
};

export { Table };

Table.propTypes = {
  articles: PropTypes.array,
  onChange: PropTypes.func,
};

const TableContainer = styled.table`
  width: 100%;
  border-radius: 8px;
  background-color: #F4F5F7;
  display: table;
  border-spacing: 0;
  border-collapse: collapse;
  margin-top: 10px;
  color: #343b3f;
  text-align: left;
  font-size: 12px;
  margin-bottom: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e7eb;

  thead th {
    line-height: 26px;
    letter-spacing: 0.05em;
    color: #6b7280;
    background: #f9fafb
    text-transform: uppercase;
    height: 40px;
  }

  thead th:nth-child(1) {
    width: 152px;
  }

  thead th:nth-child(2) {
    width: 313px;
  }

  thead th:nth-child(3) {
    width: 383px;
  }

  thead th:nth-child(4) {
    width: 141px;
  }

  thead th:nth-child(5) {
    width: 101px;
  }

  tr {
    display: table-row;
    outline: 0;
    vertical-align: middle;
  }
  th {
    background-color: #f9fafb;
  }
  thead th,
  tbody td {
    padding-left: 24px;
    display: table-cell;
    height: 40px;
    font-weight: 400;
  }

  tbody td {
    height: 52px;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 20px;
    color: #6B7280;
  }

  tbody td:nth-child(1) {
    font-weight: 500;
    color: #2D314E;
  }

  tbody tr:nth-child(odd){
    background: ${({ theme }) => theme.colors.white};
  }
`;

const TextLink = styled(Text)`
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #84e1a7;
`;

const Hr = styled.div`
  margin: 48px 20px 17px 20px;
  background: #e5e7eb;
  height: 1px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 20px 114px 20px;
`;

const Previous = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Steps = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Next = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextStep = styled(Text)`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #6b7280;
  cursor: pointer;
`;