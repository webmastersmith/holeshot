import sharp from 'sharp';

sharp('./electrical/commercial.jpg').resize(2614, 2090).toFile('./electrical/commercial-large.jpg');
