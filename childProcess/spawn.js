const { spawn } = require('child_process');

const spawnExec = spawn('cmd.exe', ['/c', 'dir', 'C:\\']);

spawnExec.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

spawnExec.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

spawnExec.on('close', (code) => {
    console.log(`Process exited with code ${code}`);
});