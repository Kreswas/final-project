import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';

// import styles from '../styles/Home.module.css';

const headerStyles = css`
  border-color: yellow;
  text-align: center;
`;

const smallText = css`
  font-size: 13px;
  opacity: 1;
`;

const buttonStyles = css`
  text-decoration: none;
  padding: 5px 10px;
  font-size: 20px;
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  :before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  :active {
    color: #000;
  }
  :active:after {
    background: transparent;
  }
  :hover:before {
    opacity: 1;
  }
  :after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

const formStyles = css`
  margin: auto;
  width: 60%;
  border: 3px solid black;
  padding: 50px;
  font-size: 20px;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 css={headerStyles}>
        Social Platform For Games. <br />
        For Gamers.
      </h1>
      <form css={formStyles}>
        <div>
          <label htmlFor="userName">User Name: </label>
          <input placeholder="User Name" />
        </div>

        <div>
          <label htmlFor="Password">Password: </label>
          <input placeholder="Password" />
        </div>

        <div>
          <label htmlFor="email">E-mail: </label>
          <input placeholder="E-Mail" />
        </div>

        <div>
          <label htmlFor="repeatEmail">Repeat E-Mail: </label>
          <input placeholder="Repeat E-Mail" />
        </div>
        <br />
        <div>
          <Link href="/subpages/homepage" className="button" css={buttonStyles}>
            Log In
          </Link>
        </div>
        <br />
        <div css={smallText}>
          Don't have an account yet? <Link href="/signup">Sign up!</Link>
        </div>
      </form>
    </div>
  );
}
