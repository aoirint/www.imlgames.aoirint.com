import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>imlgames.aoirint.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="section">
        <div className="container">
          <h1 className="title">
            imlgames.aoirint.com
          </h1>
          <h2 className="subtitle">
            Game Servers
          </h2>
          <div className='content'>
            <h3>Minecraft（Java版）</h3>
            <table className='table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Server Version</th>
                  <th>Readme</th>
                  <th>Web Map</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    mcpixelmon-cj
                  </td>
                  <td>
                    <code>
                      mikoto.aoirint.com:25575
                    </code>
                  </td>
                  <td>
                    Forge 1.12.2
                  </td>
                  <td>
                    <Link href="minecraft-java/mcpixelmon-cj/">
                      Link
                    </Link>
                  </td>
                  <td>
                    <Link href="https://mcpixelmon.aoirint.com/">
                      Link
                    </Link>
                  </td>
                  <td>
                    <span className="tag is-success">Running</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    mcbiome-cj
                  </td>
                  <td>
                    <code>
                      mikoto.aoirint.com:25576
                    </code>
                  </td>
                  <td>
                    Forge 1.19.2
                  </td>
                  <td>
                    <Link href="minecraft-java/mcbiome-cj/">
                      Link
                    </Link>
                  </td>
                  <td>
                    <Link href="https://mcbiome.aoirint.com/">
                      Link
                    </Link>
                  </td>
                  <td>
                    <span className="tag is-success">Running</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    roka
                  </td>
                  <td>
                    <code>
                      mikoto.aoirint.com:25578
                    </code>
                  </td>
                  <td>
                    Vanilla 1.19.2
                  </td>
                  <td>
                    <Link href="minecraft-java/roka/">
                      Link
                    </Link>
                  </td>
                  <td>
                  </td>
                  <td>
                    <span className="tag is-danger">Stopped</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    aur
                  </td>
                  <td>
                    <code>
                      mikoto.aoirint.com:25577
                    </code>
                  </td>
                  <td>
                    Vanilla 1.19.2
                  </td>
                  <td>
                    <Link href="minecraft-java/aur/">
                      Link
                    </Link>
                  </td>
                  <td>
                  </td>
                  <td>
                    <span className="tag is-danger">Stopped</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <h3>Minecraft（Bedrock版）</h3>
            <table className='table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Server Version</th>
                  <th>Readme</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    roka
                  </td>
                  <td>
                    <code>
                      mikoto.aoirint.com:19132
                    </code>
                  </td>
                  <td>
                    1.19.40.02
                  </td>
                  <td>
                    <Link href="minecraft-bedrock/roka/">
                      Link
                    </Link>
                  </td>
                  <td>
                    <span className="tag is-danger">Stopped</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    aur
                  </td>
                  <td>
                    <code>
                      mikoto.aoirint.com:19134
                    </code>
                  </td>
                  <td>
                    1.19.40.02
                  </td>
                  <td>
                    <Link href="minecraft-bedrock/aur/">
                      Link
                    </Link>
                  </td>
                  <td>
                    <span className="tag is-danger">Stopped</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <h3>ARK: Survival Evolved</h3>
            <table className='table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Server Version</th>
                  <th>Readme</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    ark-aur
                  </td>
                  <td>
                    <code>
                      mikoto.aoirint.com:7777,7778,27015
                    </code>
                  </td>
                  <td>
                    9382229 (2022-08-25)
                  </td>
                  <td>
                    <Link href="ark/ark-aur/">
                      Link
                    </Link>
                  </td>
                  <td>
                    <span className="tag is-danger">Stopped</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <h3>Terraria</h3>
            <table className='table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Server Version</th>
                  <th>Readme</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    terraria-aur
                  </td>
                  <td>
                    <code>
                      mikoto.aoirint.com:17777
                    </code>
                  </td>
                  <td>
                    TShock 1.4.3.6
                  </td>
                  <td>
                    <Link href="terraria/terraria-aur/">
                      Link
                    </Link>
                  </td>
                  <td>
                    <span className="tag is-success">Running</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    terraria-aur2
                  </td>
                  <td>
                    <code>
                      mikoto.aoirint.com:17778
                    </code>
                  </td>
                  <td>
                    TShock 1.4.3.6
                  </td>
                  <td>
                    <Link href="terraria/terraria-aur2/">
                      Link
                    </Link>
                  </td>
                  <td>
                    <span className="tag is-success">Running</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
