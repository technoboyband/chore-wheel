const Chores = () => {
    return (<div>
        <h3>Add Chores</h3>
        <input type="text" onChange={(e) => e.target.value}></input>
        <button>Add</button>

        <h3>Chores</h3>
        <button>Shuffle</button>
    </div>);
}

export default Chores;