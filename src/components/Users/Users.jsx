import styles from "./users.module.css";
import ava from "../../img/ava-user.jpg";
import React from "react";
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 5) {
            pages.push(i);
        }
    }

    return (
        <>
            <div className={styles.boxNumbers}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedNumber}
                                 onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}>{p}</span>
                })}
            </div>
            <div className={styles.container}>
                {
                    props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : ava}
                                 alt={'ava'}
                                 className={styles.userPhoto}/>
                            </NavLink>
                            </div>
                            <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.unfollow(u.id)
                                      }
                                      }>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follow(u.id)
                                      }
                                      }>Follow</button>}

                            </div>
                            </span>
                        <span>
                            <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            </span>
                            <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                            </span>
                            </span>
                    </div>)
                }
            </div>
        </>
    )
}

export {Users};