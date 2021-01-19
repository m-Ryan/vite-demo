import { useAppSelector } from '@/selectors/useAppSelector';
import user from '@/store/user';
import template, { fetchTemplateById, TEMPLATE_FETCH_VY_ID } from '@/store/template';
import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './index.module.scss';
import { useLoading } from '@/selectors/useLoading';

export default function Home() {
    const dispatch = useDispatch()
    const userState = useAppSelector('template');
    const loading = useLoading(TEMPLATE_FETCH_VY_ID)
    console.log(userState)

    const increment = () => {
        dispatch(template.actions.fetchTemplateById(381))
    }
    return <div onClick={increment} className={styles.header}>Home</div>
}


