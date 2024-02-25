import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
    const [name, setName] = useState("");
    const [users, setUsers] = useState([]);

    const postData = () => {
        axios
            .post('https://65d2f598522627d50107b192.mockapi.io/users', {
                name: name,
                age: '22',
                hobbies: ['poetry', 'cooking', 'coding', 'Piano', 'Dancing'],
            })
            .then((res) => {
                console.log(res.data);
                // After posting data, update the list of users
                fetchData();
            })
            .catch((err) => {
                console.error(err); // Log the error for debugging
            });
    };

    const fetchData = () => {
        axios.get('https://65d2f598522627d50107b192.mockapi.io/users')
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.error(err); // Log the error for debugging
            });
    };

    // GET
    useEffect(() => {
        fetchData();
    }, []);

    // UPDATE
    const updateData = (id) => {
        console.log(id);
        axios.put(`https://65d2f598522627d50107b192.mockapi.io/users/${id}`, {
            name: name,
            age: "33",
            hobbies: [
                "poetry",
                "cooking",
                "travelling",
                "coding",
                "piano",
                "sleeping",
            ],
        })
            .then(() => {
                // After updating data, re-fetch the list of users
                fetchData();
            })
            .catch((err) => {
                console.error(err); // Log the error for debugging
            });
    };

    const deleteData = (id) => {

        axios.delete(`https://65d2f598522627d50107b192.mockapi.io/users/${id}`)
            .then(() => {
                console.log(`Deleted user with ${id}`)
            })

    }

    return (
        <div className="App">
            <input placeholder='Name' onChange={(e) => setName(e.target.value)} />
            <button onClick={postData}>POST Data</button>

            {
                users.map((user) => (
                    <div key={user.id}>
                        <h2>{`${user.id}. ${user.name}`}</h2>
                        <button onClick={() => updateData(user.id)}>Update</button>
                        <button onClick={() => deleteData(user.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}