import React from 'react';
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

export default () => <nav>
    <ul>
        { navigation.map(
            item => <NavigationItem
                href={item.href}
                content={item.content}
                key={item.href}
                />
        ) }
    </ul>
</nav>;
