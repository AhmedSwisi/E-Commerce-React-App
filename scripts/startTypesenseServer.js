const {exec} = require('child_process')

require('dotenv').config()

const API_KEY = process.env.TYPESENSE_ADMIN_API_KEY;
const PORT = 8180
const command = `docker run --hostname=40613f0085d0 --env=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin --volume=C:\Users\ahswe\typesense-data\typesense-data:/data:rw --network=typesense-data_default -p 8108:8108 --restart=on-failure:0 --label='com.docker.compose.config-hash=c5ffb487efe6e6f12ab586fe978ae663152bfe5fec493238857ff4902332f2ed' --label='com.docker.compose.container-number=1' --label='com.docker.compose.depends_on=' --label='com.docker.compose.image=sha256:7ca15e592d2b552895d92b484740af1e94e886c8a3580090d109d875f915c132' --label='com.docker.compose.oneoff=False' --label='com.docker.compose.project=typesense-data' --label='com.docker.compose.project.config_files=C:\Users\ahswe\typesense-data\compose.yaml' --label='com.docker.compose.project.working_dir=C:\Users\ahswe\typesense-data' --label='com.docker.compose.service=typesense' --label='com.docker.compose.version=2.23.3' --label='org.opencontainers.image.ref.name=ubuntu' --label='org.opencontainers.image.version=22.04' --runtime=runc -d typesense/typesense:0.25.1`

exec(command, (err, stdout, stderr) => {
    if (!err && !stderr) console.log("Typesense Server is running...");
  
    if (err) {
      console.log("Error running server: ", err);
    }
  
    if (stderr) {
      console.log("Error running server: ", stderr);
    }
  
    if (stdout) {
      console.log("Server output: ", stdout);
    }
  });