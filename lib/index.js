module.exports = {
    HTML:function(title, body){
      return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${title}</title>
      </head>
      <body>
        <div class="header">
            <a href="/" class="GobackIndexButton" title = "${title}">${title}</a>  
            <div id="Welcome">Welcome to ${title}</div>
        </div>
        <div class = "bosscontainer">
            <div id="movieAtagcontainer">
                <a href="movie/1917">
                    <img class="imgsize"  title="1917"  src="https://i0.wp.com/www.theartsshelf.com/wp-content/uploads/2019/11/71688301_2238284169614968_7983414201110495232_o.png?fit=1640%2C720&ssl=1" >
                </a>
                <a href="movie/imitationgame">
                    <img class="imgsize"  title="The Imitationgame"  src="https://www.kanopy.com/sites/default/files/imagecache/vp_thumbnail_extremly_large/video-assets/1222983_landscape.jpg ">
                </a>
                <a href="movie/jurassicpark">
                    <img class="imgsize"  title="Jurassic Park"  src="https://c4.wallpaperflare.com/wallpaper/710/290/534/jurassic-park-logo-silhouette-90s-wallpaper-preview.jpg">
                </a>
                <a href="movie/Avengers infinity war">
                    <img class="imgsize"  title="Avengers: Infinity War"  src="https://policyviz.com/wp-content/uploads/2018/12/Avengers-Infinity-War-poster.jpg">
                </a>
                <a href="movie/mazerunner">
                    <img class="imgsize"  title="Maze runner"  src="https://www.ecopetit.cat/wpic/mpic/104-1042583_maze-runner.jpg">
                </a>
                <a href="movie/kingsman">
                    <img class="imgsize"  title="Kingsman: secret agents(service)"  src="https://wallpapers.moviemania.io/desktop/movie/207703/7ec949/kingsman-the-secret-service-desktop-wallpaper.jpg?w=2552&h=1442">
                </a>
                <a href="movie/joker">
                    <img class="imgsize"  title="Joker"  src="https://wallpaperaccess.com/full/1508269.jpg">
                </a>
                <a href="movie/toystory">
                    <img class="imgsize"  title="Toy Story 1"  src="https://fanart.tv/fanart/movies/862/moviethumb/toy-story-536a93aa12a16.jpg">
                </a>
                <a href="movie/33">
                    <img class="imgsize"  title="The 33"  src="https://f.ptcdn.info/369/037/000/nxrk3z1maC7uuc1FQ5m-o.jpg">
                </a>
                <a href="movie/zootopia">
                    <img class="imgsize"  title="Zootopia"  src="https://image.tmdb.org/t/p/w500_and_h282_face/mhdeE1yShHTaDbJVdWyTlzFvNkr.jpg">
                </a>
                <a href="movie/parasite">
                    <img class="imgsize"  title="Parasite"  src="https://qph.fs.quoracdn.net/main-qimg-d5bf7cb7b406f125fa29554d93eedf79">
                </a>
                <a href="movie/up">
                    <img class="imgsize"  title="Up"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTefwU7BEyUcZntUOeisT8kP2PRmz-8dhFDXMXepAYrWyp_481">
                </a>
                <a href="movie/savingprivateryan">
                    <img class="imgsize"  title="Saving Private Ryan"  src="https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/paramount-3500106353_UHD-Full-Image_GalleryCover-en-US-1557510526812._UY500_UX667_RI_VSUnQ1WgGslvkLZiDKyEDUWoQrho92uE_TTW_.jpg" >
                </a>
                <a href="movie/train to busan">
                    <img class="imgsize"  title="Traintobusan"  src="https://t1.daumcdn.net/cfile/tistory/252DD74357D7B2041C">
                </a>
                <a href="movie/insideout">
                    <img class="imgsize"  title="Insideout"  src="https://wallpaperaccess.com/full/1707281.jpg">
                </a>
                <a href="movie/snowpiercer">
                    <img class="imgsize"  title="Snowpiercer"  src="https://www.cinemafunk.com/wp-content/uploads/2014/07/Snowpiercer-Poster-French-e1419026115374.jpg">
                </a>
                <a href="movie/insterstellar">
                    <img class="imgsize"  title="Interstellar"  src="https://www.davinci-arts.com/apieri2/wp-content/uploads/2014/10/interstellar-poster-horizontal.jpg">
                </a>
                <a href="movie/kingsman2">
                    <img class="imgsize"  title="Kingsman: Golden Circle"  src="https://cdn3.movieweb.com/i/article/Gq40yCONR0LvVzdwgqh4Nqdgu2iwsg/1200:100/Kingsman-Golden-Circle-Movie-Review.jpg">
                </a>
                <a href="movie/Avengers endgame">
                    <img class="imgsize"  title="Avengers: End Game"  src="https://videoter.com/wp-content/uploads/2019/03/avengers-endgame-poster-controversy-marvel-changed-the-avengers-endgame-poster-after-outrage.271xh&resize=1200:*">
                </a>
                <a href="movie/dawnoftheplanetsoftheapes">
                    <img class="imgsize"  title="Dawn of the planets of the apes"  src="https://i1.wp.com/www.techdigest.tv/wp-content/uploads/2014/11/Dawn-of-planet-of-apes-poster.jpg?resize=795%2C454&ssl=1">
                </a>
                <a href="movie/maleficent2">
                    <img class="imgsize"  title="Maleficent2"  src="https://maleficentmania.com/wp-content/uploads/2014/10/poster-jolie.jpg">
                </a>
                <a href="movie/geminiman">
                    <img class="imgsize"  title="GeminiMan"  src="https://cdn.flickeringmyth.com/wp-content/uploads/2019/09/Gemini-Man-intl-poster-600x817-1.jpg">
                </a>
                <a href="movie/ford vs ferrari">
                    <img class="imgsize"  title="Ford vs Ferrari"  src="https://i1.wp.com/www.iconvsicon.com/wp-content/uploads/2019/06/Ford_v_Ferrari_OneSheet-featured.jpg?fit=800%2C488&ssl=1">
                </a>
                <a href="movie/black money">
                    <img class="imgsize"  title="Black Money"  src="https://img.sbs.co.kr/newsnet/etv/upload/2019/10/01/30000635202_16v9.jpg">
                </a>
                <a href="movie/6 underground">
                    <img class="imgsize"  title="Six UnderGround"  src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbR8F3V%2FbtqAy1355JR%2FSSrfTzf09feIPcPhhfVvy1%2Fimg.jpg">
                </a>
                <a href="movie/rocky">
                    <img class="imgsize"  title="Rocky I"  src="https://api.time.com/wp-content/uploads/2015/11/rocky.jpeg">
                </a>
                <a href="movie/terminator.dark.fate">
                    <img class="imgsize"  title="Terminator: Dark fate"  src="https://popcornscore.files.wordpress.com/2019/12/terminator-dark-fate-horzontal-e1575844667764.jpg?w=694">
                </a>
                <a href="movie/taxi driver">
                    <img class="imgsize"  title="taxi driver"  src="https://i.ytimg.com/vi/os0KHQmG5pg/maxresdefault.jpg">
                </a>
                <a href="movie/now you see me">
                    <img class="imgsize"  title="now you see me"  src="https://i.pinimg.com/originals/44/36/5b/44365b38dd1357be403305596746ff1c.jpg">
                </a>
                <a href="movie/the truman show">
                    <img class="imgsize"  title="the truman show"  src="https://pgnqdrjultom1827145.cdn.ntruss.com/img/24/ba/24ba118cf82d1947069766bababaa924529205063e9a3b263748fac70b7a408b_v1.jpg">
                </a>
            </div>
        </div>
          <link rel="stylesheet" href="indexstyle.css">
      </body>
      </html>
      `;
    }
  }