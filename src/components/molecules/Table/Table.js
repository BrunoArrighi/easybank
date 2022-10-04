import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Text } from "../../atoms/Text";
import { IconArrowLeft, IconArrowRight } from "../../atoms/Icon";

const Table = ({ articles, onChange, ...props }) => {
  const [pageActive, setPageActive] = useState(0);
  const [showArticles, setShowArticles] = useState(articles);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [art, setArt] = useState([...showArticles].slice(0, 6));

  useEffect(() => {
    setShowArticles(articles);
    getPageNumbers();
    changeStep(pageActive);
  }, [articles]);

  const changeStep = (id) => {
    if (id < 0) return;
    const firstIndex = id * 6;
    if (firstIndex >= showArticles.length) return;
    setArt([...showArticles].slice(firstIndex, firstIndex + 6));
    setPageActive(id);
  };

  const getDateTable = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (month < 10 && day < 10) {
      return `0${month}-0${day}-${year}`;
    } else if (month < 10) {
      return `0${month}-${day}-${year}`;
    } else if (day < 10) {
      return `${month}-0${day}-${year}`;
    }

    return `${day}-${month}-${year}`;
  };

  const getPageNumbers = () => {
    const totalPages = showArticles.length / 6;
    let pNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPages); i++) {
      const obj = { num: i };
      pNumbers.push(obj);
      setPageNumbers(pNumbers);
    }
  };

  const edit = (id) => {
    onChange(id);
    window.scrollTo(0, 150);
  };

  return (
    <>
      <TableContainer {...props}>
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
                <TextLink tag="a" onClick={() => edit(art.id)}>
                  Edit
                </TextLink>
              </td>
            </tr>
          ))}
        </tbody>
      </TableContainer>
      <Hr />
      <Pagination>
        <PaginationStyles>
          <TextStep tag="a" onClick={() => changeStep(pageActive - 1)}>
            <IconLeft width="20px" height="20px" /> Previous
          </TextStep>
        </PaginationStyles>
        <Steps>
          {pageNumbers.map((n, idx) => (
            <TextStep
              key={idx}
              stepNumber={true}
              pageActive={pageActive === idx ? true : false}
              onClick={() => changeStep(idx)}
            >
              {n.num}
            </TextStep>
          ))}
        </Steps>
        <PaginationStyles>
          <TextStep tag="a" onClick={() => changeStep(pageActive + 1)}>
            Next <IconRight width="20px" height="20px" />
          </TextStep>
        </PaginationStyles>
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
  color: #343b3f;
  text-align: left;
  font-size: 12px;
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

const PaginationStyles = styled.div`
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
  display: flex;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #6b7280;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }
  ${({ stepNumber }) =>
    stepNumber &&
    css`
      margin-right: 32px;
    `}
  ${({ stepNumber, pageActive }) =>
    stepNumber &&
    pageActive &&
    css`
      color: #84e1a7;
    `}
`;

const IconLeft = styled(IconArrowLeft)`
  margin-right: 14px;
`;

const IconRight = styled(IconArrowRight)`
  margin-left: 14px;
`;
