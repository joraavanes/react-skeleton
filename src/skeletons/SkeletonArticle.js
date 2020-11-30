import React from 'react'
import SkeletonElement from './SkeletonElement'
import './Skeleton.css'

const SkeletonArticle = () => {
    return (
        <div className="skeleton-wrapper">
            <SkeletonElement type="title"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
        </div>
    )
}

export default SkeletonArticle
