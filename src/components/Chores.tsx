import { useState } from "react";

interface choreProps {
    chores: string[],
    addChores: (chore:string) => void;
}

const Chores = (props: choreProps) => {
    const [chore, setNewChore] = useState('');
    return (<div>
        <h3>Add Chores</h3>
        <input type="text" onChange={(e) => setNewChore(e.target.value)}></input>
        <button onClick={props.addChores(chore)}>Add</button>

        <h3>Chores</h3>
        <button>Shuffle</button>
    </div>);
}

export default Chores;