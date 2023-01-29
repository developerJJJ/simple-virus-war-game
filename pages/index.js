import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Immune war</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Virus WAR</h1>

        <p className={styles.description}>
          Survive and destory the enemy immune system!
        </p>
        <div className="two-side">
          <div className="two-side-l">
            <span>Your nation, </span>
            <span>Income:</span>
            <table border="1">
              <tbody>
                <th>Statistics</th>
                <tr>
                  <td>population</td>
                  <td>1000m</td>
                </tr>
                <tr>
                  <td>infected</td>
                  <td>10%</td>
                </tr>
                <th>Virus</th>
                <th>Damage</th>
                <th>Count</th>
                {/* <tr>
                  <td>cold</td>
                  <td>100</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>flu</td>
                  <td>200</td>
                  <td>0</td>
                </tr> */}
                <tr>
                  <td>coronavirus</td>
                  <td>9999</td>
                  <td>0</td>
                </tr>
                <th>Immune system</th>
                <th>Defense</th>
                <th>Count</th>
                <tr>
                  <td>leukocyte</td>
                  <td>200</td>
                  <td>100</td>
                </tr>
                {/* <tr>
                  <td>antibody</td>
                  <td>1000</td>
                  <td>100</td>
                </tr> */}
              </tbody>
            </table>
            <button>Build Infrastrucure</button>
            <button>Virus attack</button>
            <button>Immune system defense</button>
          </div>
          <div className="two-side-r">
            <span>Enemy nation, </span>
            <span>Income:</span>
            <table border="1">
              <tbody>
                <th>Statistics</th>
                <tr>
                  <td>population</td>
                  <td>1000m</td>
                </tr>
                <tr>
                  <td>infected</td>
                  <td>10%</td>
                </tr>
                <th>Virus</th>
                <th>Damage</th>
                <th>Count</th>
                {/* <tr>
                  <td>cold</td>
                  <td>100</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>flu</td>
                  <td>200</td>
                  <td>0</td>
                </tr> */}
                <tr>
                  <td>coronavirus</td>
                  <td>9999</td>
                  <td>0</td>
                </tr>
                <th>Immune system</th>
                <th>Defense</th>
                <th>Count</th>
                <tr>
                  <td>leukocyte</td>
                  <td>200</td>
                  <td>100</td>
                </tr>
                {/* <tr>
                  <td>antibody</td>
                  <td>1000</td>
                  <td>100</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <footer>&copy; 2022-2023. CleanWater all rights reserved.</footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
