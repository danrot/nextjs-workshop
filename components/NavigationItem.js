import React from 'react';
import Link from 'next/link';
import css from 'next/css';

const liStyle = css({
    display: 'inline',
    paddingRight: '20px',
    textTransform: 'uppercase'
});

const aStyle = css({
    borderBottom: '1px solid transparent',
    color: '#000',
    textDecoration: 'none',
    transition: 'border-bottom 0.5s',
    ':hover': {
        borderBottom: '1px solid #000'
    }
});

export default ({href, content}) => <li className={liStyle}>
    <Link href={href}><a className={aStyle}>{content}</a></Link>
</li>;
