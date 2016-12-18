import React from 'react';
import css from 'next/css';
import NavigationItem from './NavigationItem';

const navigation = [
    {
        href: '/',
        content: 'Home'
    },
    {
        href: '/about',
        content: 'About'
    }
];

const style = css({
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    textAlign: 'right'
});

export default () => <nav>
    <ul className={style}>
        { navigation.map(
            item => <NavigationItem
                href={item.href}
                content={item.content}
                key={item.href}
                />
        ) }
    </ul>
</nav>;
