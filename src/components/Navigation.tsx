import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🌱 植物大战僵尸
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">首页</Link>
          </li>
          <li className="nav-item">
            <Link to="/game" className="nav-link">开始游戏</Link>
          </li>
          <li className="nav-item">
            <Link to="/rules" className="nav-link">游戏规则</Link>
          </li>
          <li className="nav-item">
            <Link to="/leaderboard" className="nav-link">排行榜</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
