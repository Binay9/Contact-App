import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const contacts = [
    {
      id: "1",
      name: "David Bhai",
      email: "david@mail.com",
    },

    {
      id: "2",
      name: "Saroj Kumar",
      email: "saroj@hotmail.com",
    },
  ];

  return (
    <div className="myMain">
      <Header />
      <div className='row'>
        <AddContact />
        <ContactList contacts={contacts} />
      </div>

    </div>
  );
}

export default App;
