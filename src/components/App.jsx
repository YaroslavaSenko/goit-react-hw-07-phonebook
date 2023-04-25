// import { useEffect, useState } from "react";
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
// import { nanoid } from 'nanoid';
import { Contacts } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Contacts>      
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <Filter />
      <ContactList />
    </Contacts>
  );
};
