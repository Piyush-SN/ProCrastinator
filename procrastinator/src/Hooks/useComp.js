import {useState, useEffect} from 'react';
import {firebase} from '../firebase';

export const useComp = () => {
    const [comp, setComp] = useState([]);

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('tasks')
        .where('userId', '==', 'piyush1');

        unsubscribe = unsubscribe.onSnapshot(snapshot => {
            const newComp = snapshot.docs.map(task => ({
                id: task.id,
                ...task.data(),
            }));

            setComp(
                 newComp.filter(task => task.archived == true)
            );
        });

        return() => unsubscribe();
    }, []);

    return{comp};
};

