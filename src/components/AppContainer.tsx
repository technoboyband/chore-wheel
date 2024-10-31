import { useState } from "react";
import Header from "./Header";
import Chores from "./Chores";
import Wheel from "./Wheel";


const AppContainer = () => {
    const [chores, setChores] = useState<string[]>([]);

    const handleAddChores = (chore: string) => {
        setChores([...chores, chore]);
    }

    const handleRemoveChores = (index:string) => {
        setChores(chores.filter(i => index !== i));
    }

    const handleShuffleChores = () => {

    }

    return (<div>
        <Header></Header>
        <Chores chores={chores} addChores={handleAddChores}></Chores>
        <Wheel></Wheel>
    </div>);
}

export default AppContainer;