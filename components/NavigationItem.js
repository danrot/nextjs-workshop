import React from 'react';
import Link from 'next/link';

export default ({href, content}) => <li><Link href={href}><a>{content}</a></Link></li>;
