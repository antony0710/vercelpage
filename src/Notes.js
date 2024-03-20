import React, { useEffect, useState } from 'react';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const server = 'https://antonyazurenode.azurewebsites.net/';
    // const server = 'http://localhost:5000';
    const fetchNotes = () => {
        fetch(server+'/getNotes')
            .then(response => response.json())
            .then(notes => {
                setNotes(notes);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const saveNote = () => {
        fetch(server+'/addNotes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Title: title, Content: content }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            setTitle('');
            setContent('');
            fetchNotes();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div>
            <h2>Notes</h2>
            {notes.map((note, index) => (
                <div key={index} className='note'>
                    <h3>{note.Title}</h3>
                    <pre>{note.Content}</pre>
                </div>
            ))}
            <div>
            <input id="title" value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' />
            <textarea id="content" value={content} onChange={e => setContent(e.target.value)} placeholder='Content'/>
            <button id="save" onClick={saveNote}>Save</button>
            </div>
        </div>
    );
};

export default Notes;