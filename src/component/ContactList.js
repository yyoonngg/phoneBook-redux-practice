import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { contact, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      let list = contact.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contact);
    }
  }, [keyword, contact]);
  return (
    <div className="mt-4">
      <SearchBox />
      <div className="mt-3">
        <div>총 연락처: {contact.length}</div>
        {filteredList.map((item) => (
          <ContactItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
