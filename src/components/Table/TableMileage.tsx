import React from 'react';
import style from './TableMileage.module.scss';
import cx from 'classnames';

const TableMileage = () => {
  return (
    <div className={style.table__mileage}>
      <div className={style['table__mileage-body']}>
        <div className={style["table__mileage-header"]}>일자</div>
        <div className={style["table__mileage-header"]}>지급</div>
        <div className={style["table__mileage-header"]}>차감</div>
        <div className={style["table__mileage-header"]}>소멸</div>
        <div className={style["table__mileage-header"]}></div>
        {[...Array(10)].map(() => (
          <>
            <div className={cx(style["table__mileage-cell"], 'text-[#212121]')}>
              2022-01-27
            </div>
            <div className={style["table__mileage-cell"]}>
              17,500원
            </div>
            <div className={style["table__mileage-cell"]}>
              -4,500원
            </div>
            <div className={style["table__mileage-cell"]}>
              -500,000원
            </div>
            <div className={style["table__mileage-cell"]}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="tw-inline-block">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.35355 10.3534L1.00001 15.3535L0.646454 15L6 9.99988L6.35355 10.3534Z" fill="#212121" />
                <path fillRule="evenodd" clipRule="evenodd" d="M10 11.5C13.0376 11.5 15.5 9.03757 15.5 6C15.5 2.96243 13.0376 0.5 10 0.5C6.96243 0.5 4.5 2.96243 4.5 6C4.5 9.03757 6.96243 11.5 10 11.5ZM10 12C13.3137 12 16 9.31371 16 6C16 2.68629 13.3137 0 10 0C6.68629 0 4 2.68629 4 6C4 9.31371 6.68629 12 10 12Z" fill="#212121" />
                <path fillRule="evenodd" clipRule="evenodd" d="M6.75 5.75H13.25V6.25H6.75V5.75Z" fill="#212121" />
                <path fillRule="evenodd" clipRule="evenodd" d="M9.75 9.25L9.75 2.75L10.25 2.75L10.25 9.25L9.75 9.25Z" fill="#212121" />
              </svg>
            </div>
          </>
        ))}
      </div>
    </div >
  )
}

export default TableMileage