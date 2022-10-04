import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { PagesContext } from "../../../context/PagesContext";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";

const Form = ({
  author = "",
  title = "",
  content = "",
  onEdit = false,
  id,
  onSubmit,
  ...props
}) => {
  const { setArticles, setLatestArticles, setPage } = useContext(PagesContext);
  const [authorValue, setAuthorValue] = useState(author);
  const [blogTitleValue, setBlogTitleValue] = useState(title);
  const [blogContentValue, setBlogContentValue] = useState(content);

  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    setAuthorValue(author);
    setBlogContentValue(content);
    setBlogTitleValue(title);
  }, [onEdit]);

  useEffect(() => {
    if (
      authorValue.length === 0 &&
      blogContentValue.length === 0 &&
      blogTitleValue.length === 0
    ) {
      onSubmit();
    }
  }, [authorValue, blogContentValue, blogTitleValue]);

  const validate = () => {
    setMessageError("");
    if (
      authorValue.length === 0 ||
      blogTitleValue.length === 0 ||
      blogContentValue.length === 0
    ) {
      setMessageError("The fields are required");
      return;
    }
    if (
      authorValue.length < 3 ||
      authorValue.length > 50 ||
      blogTitleValue.length < 3 ||
      blogTitleValue.length > 50 ||
      blogContentValue.length < 3 ||
      blogContentValue.length > 50
    ) {
      setMessageError("min or max");
      return;
    }

    const payload = {
      author: authorValue,
      content: blogContentValue,
      title: blogTitleValue,
    };
    const requestOptions = {
      method: onEdit ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
    fetch(
      `https://servicepad-post-api.herokuapp.com/articles/${onEdit ? id : ""}`,
      requestOptions
    )
      .then((rta) => {
        if (rta && rta.status && rta.status > 399) {
          setMessageError("Unexpected error has ocurred. try again");
        }
        if (rta && rta.ok && rta.ok == true) {
          onSubmit();
          fetch(`https://servicepad-post-api.herokuapp.com/articles/`)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              const arr = data.data.sort(
                (a, b) => new Date(b.date) - new Date(a.date)
              );
              setLatestArticles(arr.slice(0, 4));
              setArticles(arr);
              return setPage("Home");
            });
        }
      })
      .catch(() => {
        setMessageError("Unexpected error has ocurred. try again");
      });
  };

  return (
    <FormContainer {...props}>
      <LabelForm>Author</LabelForm>
      <InputStyle
        value={authorValue}
        onChange={(e) => setAuthorValue(e.target.value)}
      />
      <LabelForm>Blog Title</LabelForm>
      <InputStyle
        value={blogTitleValue}
        onChange={(e) => setBlogTitleValue(e.target.value)}
      />
      <LabelForm>Blog Content</LabelForm>
      <InputStyle
        value={blogContentValue}
        tag="textarea"
        onChange={(e) => setBlogContentValue(e.target.value)}
      />
      <ButtonStyle onClick={() => validate()}>Save</ButtonStyle>
      {messageError && <label color="red">{messageError}</label>}
    </FormContainer>
  );
};

export { Form };

Form.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  onEdit: PropTypes.bool,
  id: PropTypes.string,
  onSubmit: PropTypes.func,
};

const FormContainer = styled.div`
  background: #ffffff;
  padding: 42px 45px 32px 72px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 41px;
  width: 100%;
`;

const LabelForm = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

const InputStyle = styled(Input)`
  margin-top: 4px;
  margin-bottom: 24px;
`;

const ButtonStyle = styled(Button)`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;
