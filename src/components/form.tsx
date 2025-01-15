import React, { useState } from 'react';
import './css/form.css';

interface UserFormProps {
    onAdd: (name: string, age: number) => void;
} 

const UserForm: React.FC<UserFormProps> = ({ onAdd }) => {
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number | ''>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (name && age !== '' && age > 0) { // Verifica se age é um número positivo
            onAdd(name, Number(age));
            setName('');
            setAge('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name"> Nome:</label>
                    <br />
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="age">Idade:</label>
                    <br />
                    <input
                        id="age"
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))}
                        required
                    />
                </div>
            </form>
        </div>
    );
};

export default UserForm;