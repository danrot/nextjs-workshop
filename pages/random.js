import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-fetch';
import Navigation from '../components/Navigation.js';

export default class extends React.Component {
    static async getInitialProps() {
        const id = parseInt(Math.random() * 100);

        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
        const data = await response.json();

        return {
            title: data.title,
            content: data.body
        };
    }

    render() {
        return <div>
            <Head>
                <title>Random</title>
            </Head>
            <Navigation/>
            <h1>{this.props.title}</h1>
            <p>{this.props.content}</p>
        </div>;
    }
}
