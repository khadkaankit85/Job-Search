const data = fetch("https://www.youtube.com/watch?v=K-w04FG6eyI&list=RDK-w04FG6eyI&start_radio=1").then((data) => {
    console.log(data);
    return data;
})