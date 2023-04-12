// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import s from './PhoneBookList.module.css';
// import { remove } from 'components/Redux/contact/contactsSlice';
import { useEffect } from 'react';
import {
  deleteContact,
  fetchContacts,
} from 'components/Redux/contact/contactsOperations';

const PhoneBookList = () => {
  const contacts = useSelector(state => state?.contacts);
  // const item = useSelector(state => state?.contacts);
  // const filter = useSelector(state => state?.filter);

  // const filteredContacts = contacts.filter(item =>
  //   item.name.toLowerCase().includes(filter.toLocaleLowerCase())
  // );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p>{name}:</p>
          <p className={s.number}>{number}</p>
          <button
            className={s.itemBtn}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PhoneBookList;
