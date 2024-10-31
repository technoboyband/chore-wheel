import { useState } from "react";
import Header from "./Header";
import Chores from "./Chores";
import Wheel from "./Wheel";


const AppContainer = () => {
    const [chores, setChores] = useState<string[]>([]);

    const handleAddChores = (chore: string) => {
        setChores([...chores, chore]);
    }

    const handleRemoveChores = () => {

    }

    const handleShuffleChores = () => {

    }

    return (<div>
        <Header></Header>
        <Chores></Chores>
        <Wheel></Wheel>
    </div>);
}

export default AppContainer;