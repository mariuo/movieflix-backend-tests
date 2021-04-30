INSERT INTO tb_user (name, email, password) VALUES ('Bob', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Ana', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_genre (name) VALUES ('Comédia');
INSERT INTO tb_genre (name) VALUES ('Suspense');
INSERT INTO tb_genre (name) VALUES ('Ficção Científica');

INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Senhor dos Anéis: A Sociedade do Anel','A terra Média ganha vida.','2001','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vRQnzOn4HjIMX4LBq9nHhFXbsSu.jpg','Quando o escritor J.R.R. Tolkien criou o universo de "O Senhor dos Anéis" estava longe de imaginar que estava a dar origem a um dos mais lucrativos e aclamados fenómenos cinematográficos do século XXI. Este filme, dirigido por Peter Jackson, este é o primeiro de uma trilogia que segue em crescendo por um mundo imaginário, a Terra Média, por entre criaturas fantásticas como elfos, anões, hobbits e orcs, para acompanhar a jornada de Frodo Baggins, um hobbit encarregado de uma missão particularmente espinhosa: ir até ao inóspito reino de Mordor e destruir na lava de um vulcão o Anel do Poder que o senhor do mal, Sauron, havia forjado para dominar todo o mundo. O problema é que o acesso a Mordor é virtualmente impossível e o tirano, que havia sido morto (ou assim se pensava), está afinal vivo e a reerguer-se para a guerra contra os povos livres da Terra Média. O destino do Anel, que Sauron procura avidamente recuperar, pode assim mudar o curso da história.','3');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Guerra nas Estrelas: O Império Contra-Ataca','A luta continua... há resisteência contra o Império','1980','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/dMZxEdrWIzUmUoOz2zvmFuutbj7.jpg','As forças imperais comandadas por Darth Vader (David Prowse) lançam um ataque contra os membros da resistência, que são obrigados a fugir. Enquanto isso Luke Skywalker (Mark Hamill) tenta encontrar o Mestre Yoda, que poderá ensiná-lo a dominar a "Força" e torná-lo um cavaleiro jedi. No entanto, Darth Vader planeja levá-lo para o lado negro da "Força".','3');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Ponto Vermelho','Ponto vermelho no frio','2021','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7KL4yJ4JsbtS1BNRilUApLvMnc5.jpg','Com o relacionamento em crise e um bebê a caminho, um casal decide passar uns dias nas montanhas para reacender a paixão, mas acaba na mira de assassinos impiedosos.','2');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Relatos do Mundo','Encontre o seu lar.','2020','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/6Y2B3YbCyn5IhItZkc4wAETHcpw.jpg','Um veterano de guerra que viaja de cidade em cidade lendo as notícias faz uma perigosa viagem pelo Texas para levar uma garotinha órfã até seu novo lar.','2');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Soul','Is all this living really worth dying for?','2019','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg','Joe Gardner é um professor de música de ensino fundamental desanimado por não conseguir alcançar seu sonho de tocar no lendário clube de jazz The Blue Note, em Nova York. Quando um acidente o transporta para fora do seu corpo, fazendo com que ele exista em outra realidade na forma de sua alma, ele se vê forçado a embarcar em uma aventura ao lado da alma de uma criança que ainda está aprendendo sobre si, para aprender o que é necessário para retomar sua vida.','1');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Para Todos os Garotos: Agora e Para Sempre','Você nunca sabe aonde o amor te levará.','2021','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/yFSVp7U8O34iUXBeSm2XFYTqchq.jpg','Lara Jean Covey está prestes a se formar e iniciar uma nova fase de sua vida. Durante duas viagens marcantes, ela começa a avaliar como ficará sua relação com a família, os amigos e o namorado após a formatura.".','1');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Viagem à Lua','Viagem à Lua um dos primeiros','1902','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jeC1kzwWnZTuXl7xF4E5D70BD8c.jpg','Um grupo de homens viaja à Lua, sendo levados por uma cápsula lançada de um canhão gigante, mas acabam sendo capturados por homens-lua.','3');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('MIB: Homens de Preto - Internacional ','O mundo não vai se salvar sozinho.','2019','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/uK9uFbAwQ1s2JHKkJ5l0obPTcXI.jpg','Por décadas a agência Homens de Preto protegeu a Terra da escória do universo, mas agora precisa lidar com a maior das ameaças: um traidor, justo quando a agência torna-se internacional. É neste contexto que Em tenta se tornar agente, já que teve uma experiência extraterrestre quando jovem e não teve sua memória apagada. Quem irá auxiliá-la nesta jornada é o atrapalhado agente H.','1');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('A Conquista dos Ares ','Eita danousse','1901','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/kJSnhBQZyCcbqxMZJuDby8ULcfS.jpg','Um homem cruza os céus em sua geringonça voadora.','2');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Godzilla vs. Kong','Um dos dois cairá.','2020','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/iopYFB1b6Bh7FWZh3onQhph1sih.jpg','Em uma época em que os monstros andam na Terra, a luta da humanidade por seu futuro coloca Godzilla e Kong em rota de colisão que verá as duas forças mais poderosas da natureza no planeta se confrontarem em uma batalha espetacular para as idades. Enquanto Monarch embarca em uma missão perigosa em terreno desconhecido e descobre pistas sobre as origens dos Titãs, uma conspiração humana ameaça tirar as criaturas, boas e más, da face da terra para sempre.','3');

INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Senhor dos Anéis: A Sociedade do Anel','A terra Média ganha vida.','2001','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vRQnzOn4HjIMX4LBq9nHhFXbsSu.jpg','Quando o escritor J.R.R. Tolkien criou o universo de "O Senhor dos Anéis" estava longe de imaginar que estava a dar origem a um dos mais lucrativos e aclamados fenómenos cinematográficos do século XXI. Este filme, dirigido por Peter Jackson, este é o primeiro de uma trilogia que segue em crescendo por um mundo imaginário, a Terra Média, por entre criaturas fantásticas como elfos, anões, hobbits e orcs, para acompanhar a jornada de Frodo Baggins, um hobbit encarregado de uma missão particularmente espinhosa: ir até ao inóspito reino de Mordor e destruir na lava de um vulcão o Anel do Poder que o senhor do mal, Sauron, havia forjado para dominar todo o mundo. O problema é que o acesso a Mordor é virtualmente impossível e o tirano, que havia sido morto (ou assim se pensava), está afinal vivo e a reerguer-se para a guerra contra os povos livres da Terra Média. O destino do Anel, que Sauron procura avidamente recuperar, pode assim mudar o curso da história.','3');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Guerra nas Estrelas: O Império Contra-Ataca','A luta continua... há resisteência contra o Império','1980','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/dMZxEdrWIzUmUoOz2zvmFuutbj7.jpg','As forças imperais comandadas por Darth Vader (David Prowse) lançam um ataque contra os membros da resistência, que são obrigados a fugir. Enquanto isso Luke Skywalker (Mark Hamill) tenta encontrar o Mestre Yoda, que poderá ensiná-lo a dominar a "Força" e torná-lo um cavaleiro jedi. No entanto, Darth Vader planeja levá-lo para o lado negro da "Força".','3');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Ponto Vermelho','Ponto vermelho no frio','2021','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7KL4yJ4JsbtS1BNRilUApLvMnc5.jpg','Com o relacionamento em crise e um bebê a caminho, um casal decide passar uns dias nas montanhas para reacender a paixão, mas acaba na mira de assassinos impiedosos.','2');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Relatos do Mundo','Encontre o seu lar.','2020','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/6Y2B3YbCyn5IhItZkc4wAETHcpw.jpg','Um veterano de guerra que viaja de cidade em cidade lendo as notícias faz uma perigosa viagem pelo Texas para levar uma garotinha órfã até seu novo lar.','2');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Soul','Is all this living really worth dying for?','2019','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg','Joe Gardner é um professor de música de ensino fundamental desanimado por não conseguir alcançar seu sonho de tocar no lendário clube de jazz The Blue Note, em Nova York. Quando um acidente o transporta para fora do seu corpo, fazendo com que ele exista em outra realidade na forma de sua alma, ele se vê forçado a embarcar em uma aventura ao lado da alma de uma criança que ainda está aprendendo sobre si, para aprender o que é necessário para retomar sua vida.','1');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Para Todos os Garotos: Agora e Para Sempre','Você nunca sabe aonde o amor te levará.','2021','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/yFSVp7U8O34iUXBeSm2XFYTqchq.jpg','Lara Jean Covey está prestes a se formar e iniciar uma nova fase de sua vida. Durante duas viagens marcantes, ela começa a avaliar como ficará sua relação com a família, os amigos e o namorado após a formatura.".','1');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Viagem à Lua','Viagem à Lua um dos primeiros','1902','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jeC1kzwWnZTuXl7xF4E5D70BD8c.jpg','Um grupo de homens viaja à Lua, sendo levados por uma cápsula lançada de um canhão gigante, mas acabam sendo capturados por homens-lua.','3');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('MIB: Homens de Preto - Internacional ','O mundo não vai se salvar sozinho.','2019','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/uK9uFbAwQ1s2JHKkJ5l0obPTcXI.jpg','Por décadas a agência Homens de Preto protegeu a Terra da escória do universo, mas agora precisa lidar com a maior das ameaças: um traidor, justo quando a agência torna-se internacional. É neste contexto que Em tenta se tornar agente, já que teve uma experiência extraterrestre quando jovem e não teve sua memória apagada. Quem irá auxiliá-la nesta jornada é o atrapalhado agente H.','1');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('A Conquista dos Ares ','Eita danousse','1901','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/kJSnhBQZyCcbqxMZJuDby8ULcfS.jpg','Um homem cruza os céus em sua geringonça voadora.','2');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Godzilla vs. Kong','Um dos dois cairá.','2020','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/iopYFB1b6Bh7FWZh3onQhph1sih.jpg','Em uma época em que os monstros andam na Terra, a luta da humanidade por seu futuro coloca Godzilla e Kong em rota de colisão que verá as duas forças mais poderosas da natureza no planeta se confrontarem em uma batalha espetacular para as idades. Enquanto Monarch embarca em uma missão perigosa em terreno desconhecido e descobre pistas sobre as origens dos Titãs, uma conspiração humana ameaça tirar as criaturas, boas e más, da face da terra para sempre.','3');

INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Senhor dos Anéis: A Sociedade do Anel','A terra Média ganha vida.','2001','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vRQnzOn4HjIMX4LBq9nHhFXbsSu.jpg','Quando o escritor J.R.R. Tolkien criou o universo de "O Senhor dos Anéis" estava longe de imaginar que estava a dar origem a um dos mais lucrativos e aclamados fenómenos cinematográficos do século XXI. Este filme, dirigido por Peter Jackson, este é o primeiro de uma trilogia que segue em crescendo por um mundo imaginário, a Terra Média, por entre criaturas fantásticas como elfos, anões, hobbits e orcs, para acompanhar a jornada de Frodo Baggins, um hobbit encarregado de uma missão particularmente espinhosa: ir até ao inóspito reino de Mordor e destruir na lava de um vulcão o Anel do Poder que o senhor do mal, Sauron, havia forjado para dominar todo o mundo. O problema é que o acesso a Mordor é virtualmente impossível e o tirano, que havia sido morto (ou assim se pensava), está afinal vivo e a reerguer-se para a guerra contra os povos livres da Terra Média. O destino do Anel, que Sauron procura avidamente recuperar, pode assim mudar o curso da história.','3');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Guerra nas Estrelas: O Império Contra-Ataca','A luta continua... há resisteência contra o Império','1980','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/dMZxEdrWIzUmUoOz2zvmFuutbj7.jpg','As forças imperais comandadas por Darth Vader (David Prowse) lançam um ataque contra os membros da resistência, que são obrigados a fugir. Enquanto isso Luke Skywalker (Mark Hamill) tenta encontrar o Mestre Yoda, que poderá ensiná-lo a dominar a "Força" e torná-lo um cavaleiro jedi. No entanto, Darth Vader planeja levá-lo para o lado negro da "Força".','3');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Ponto Vermelho','Ponto vermelho no frio','2021','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7KL4yJ4JsbtS1BNRilUApLvMnc5.jpg','Com o relacionamento em crise e um bebê a caminho, um casal decide passar uns dias nas montanhas para reacender a paixão, mas acaba na mira de assassinos impiedosos.','2');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Relatos do Mundo','Encontre o seu lar.','2020','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/6Y2B3YbCyn5IhItZkc4wAETHcpw.jpg','Um veterano de guerra que viaja de cidade em cidade lendo as notícias faz uma perigosa viagem pelo Texas para levar uma garotinha órfã até seu novo lar.','2');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Soul','Is all this living really worth dying for?','2019','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg','Joe Gardner é um professor de música de ensino fundamental desanimado por não conseguir alcançar seu sonho de tocar no lendário clube de jazz The Blue Note, em Nova York. Quando um acidente o transporta para fora do seu corpo, fazendo com que ele exista em outra realidade na forma de sua alma, ele se vê forçado a embarcar em uma aventura ao lado da alma de uma criança que ainda está aprendendo sobre si, para aprender o que é necessário para retomar sua vida.','1');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Para Todos os Garotos: Agora e Para Sempre','Você nunca sabe aonde o amor te levará.','2021','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/yFSVp7U8O34iUXBeSm2XFYTqchq.jpg','Lara Jean Covey está prestes a se formar e iniciar uma nova fase de sua vida. Durante duas viagens marcantes, ela começa a avaliar como ficará sua relação com a família, os amigos e o namorado após a formatura.".','1');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Viagem à Lua','Viagem à Lua um dos primeiros','1902','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jeC1kzwWnZTuXl7xF4E5D70BD8c.jpg','Um grupo de homens viaja à Lua, sendo levados por uma cápsula lançada de um canhão gigante, mas acabam sendo capturados por homens-lua.','3');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('MIB: Homens de Preto - Internacional ','O mundo não vai se salvar sozinho.','2019','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/uK9uFbAwQ1s2JHKkJ5l0obPTcXI.jpg','Por décadas a agência Homens de Preto protegeu a Terra da escória do universo, mas agora precisa lidar com a maior das ameaças: um traidor, justo quando a agência torna-se internacional. É neste contexto que Em tenta se tornar agente, já que teve uma experiência extraterrestre quando jovem e não teve sua memória apagada. Quem irá auxiliá-la nesta jornada é o atrapalhado agente H.','1');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('A Conquista dos Ares ','Eita danousse','1901','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/kJSnhBQZyCcbqxMZJuDby8ULcfS.jpg','Um homem cruza os céus em sua geringonça voadora.','2');
INSERT INTO tb_movie (title, sub_title, year, img_url, synopsis, genre_id) VALUES ('Godzilla vs. Kong','Um dos dois cairá.','2020','https://www.themoviedb.org/t/p/w533_and_h300_bestv2/iopYFB1b6Bh7FWZh3onQhph1sih.jpg','Em uma época em que os monstros andam na Terra, a luta da humanidade por seu futuro coloca Godzilla e Kong em rota de colisão que verá as duas forças mais poderosas da natureza no planeta se confrontarem em uma batalha espetacular para as idades. Enquanto Monarch embarca em uma missão perigosa em terreno desconhecido e descobre pistas sobre as origens dos Titãs, uma conspiração humana ameaça tirar as criaturas, boas e más, da face da terra para sempre.','3');


INSERT INTO tb_review(text,movie_id,user_id) VALUES('Um clássico, excelente filme!', 1,2);
INSERT INTO tb_review(text,movie_id,user_id) VALUES('Filme muito antigo, so para quem gosta!', 7,2);
INSERT INTO tb_review(text,movie_id,user_id) VALUES('Filme para ver com família.', 5,2);


