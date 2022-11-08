import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const EstiloDaHomePage = {
    // backgroundColor: "red"
  };

  // console.log(config.playlists);

  return (
    <>
      <CSSReset />
      <div style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          // backgroundColor: "red",
        }}
        >
        <Menu />
        <Header />
        <Timeline playlists={config.playlists}>
          Conteúdo
        </Timeline>
      </div>
    </>
  );
}
export default HomePage;

/*function Menu()
 {
  return
   <div>Menu</div>;
}*/

const StyledHeader = styled.div`
  img {
    width: 95px;
    height: 95px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      {/* <img src={} /> */}
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {config.name} 
          </h2>

          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  )
}

function Timeline(propriedades) {
  // console.log("Dentro do componente", propriedades.playlists);
  const playlistNames = Object.keys(propriedades.playlists);
  // Statement
  // Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        console.log(playlistName);
        console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                      </span>
                  </a>

                )
                
              })}
            </div>
          </section>

        )

      })}
    </StyledTimeline>
  )
}

// sempre coloca parenteses para quebrar e ter um pouco mais de flexibilidade no retorno, porque quando for compilar o retorno, tudo irá virar um retorno só e ele vai retornarp pro que sai do parenteses ""
