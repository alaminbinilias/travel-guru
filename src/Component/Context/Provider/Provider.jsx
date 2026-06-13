//import React from 'react';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import Context from "../Context/Context";
import { use, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";

const Data = fetch('/data.json').then(res => res.json());

const Provider = ({ children }) => {


    //const [data, setData] = useState([]);
    const data = use(Data);

    const [loading, setLoading] = useState(true);

    const [currentUser, setcurrentUser] = useState(null);
    const [placeName, setPlaceName] = useState('');
    const [searchValue, setsearchValue] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [activeIndex, setActiveIndex] = useState(0);
    //console.log(data.length);

    const nextCard = () => {
        if (activeIndex === data.length - 1) {
            setActiveIndex(data.length - 1);
        }
        else {
            setActiveIndex(activeIndex + 1);
        }
    }

    const PreviousCard = () => {
        if (activeIndex === 0) {
            setActiveIndex(0);
        }
        else {
            setActiveIndex(activeIndex - 1);
        }
    }


    ///authContext Section

    useEffect(() => {
        const unmounts = onAuthStateChanged(auth, (user) => {
            setcurrentUser(user);
            setLoading(false);
        });
        return () => unmounts();
    }, [])


    ///create user
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    ///signIn User
    const SignUser = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }

    ///GooglesignInuser

    const GoogleSignUser = () => {
        return signInWithPopup(auth, googleProvider);
    }

    ///githubuser

    const githubuser = () => {
        return signInWithPopup(auth, githubProvider);
    }

    ///reset password

    const passReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    ///signOut user

    const SignOutUser = () => {
        return signOut(auth);
    }


    ///updatedUserName

    const updateUserProfile = (name) => {
        return updateProfile(auth.currentUser, { displayName: name });
    }




    const value = {
        activeIndex,
        setActiveIndex,
        PreviousCard,
        nextCard,
        data,
        CreateUser,
        SignUser,
        GoogleSignUser,
        githubuser,
        passReset,
        currentUser,
        setcurrentUser,
        SignOutUser,
        updateUserProfile,
        placeName,
        setPlaceName,
        setsearchValue,
        searchValue,
        setLoading,
        loading

    };

    return (
        <Context value={value}>
            {children}
        </Context>
    );
};

export default Provider;