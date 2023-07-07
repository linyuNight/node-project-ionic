const { exec } = require('child_process');
const archiver = require('archiver');
const fs = require('fs');

// 执行 Vite 的构建命令
exec('vite build', (error, stdout, stderr) => {
  if (error) {
    console.error(`构建失败: ${error.message}`);
    return;
  }
  console.log(stdout);

  // 创建一个输出流，用于将构建产物压缩到 zip 文件中
  const output = fs.createWriteStream('dist.zip');
  const archive = archiver('zip', {
    zlib: { level: 9 } // 设置压缩级别为最高
  });

  output.on('close', () => {
    console.log('构建产物已成功打包成 dist.zip');
  });

  archive.on('error', (err) => {
    console.error(`打包失败: ${err.message}`);
  });

  // 将构建产物目录添加到 zip 文件中
  archive.directory('dist/', false);

  // 将 zip 文件输出到指定的流
  archive.pipe(output);

  // 开始压缩
  archive.finalize();
});
