import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

	blogs: any = [
		{
			id: 1,
			title: 'Title orem ipsum dolor sit 1',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptatibus non, tempore explicabo veritatis earum provident officia, iure reprehenderit aut, totam, aspernatur dolores dolorum veniam odit delectus minus temporibus quia?',
			summary: 'Up branch to easily missed by do. Admiration considered acceptance too led one melancholy expression. Are will took form the nor true. Winding enjoyed minuter her letters evident use eat colonel. He attacks observe mr cottage inquiry am examine gravity. Are dear but near left was. Year kept on over so as this of. She steepest doubtful betrayed formerly him. Active one called uneasy our seeing see cousin tastes its. Ye am it formed indeed agreed relied piqued.',
			autor: 'John Joe',
			twitter: '@mattiasmilos',
			imagePath: 'https://source.unsplash.com/collection/148982/1599.9x900?v=1',
			date: '20 de Enero 2018',
			topBgImgHeader: '-175%',
			country: ' Switzerland',
			city: 'Zermatt'
		},
		{
			id: 2,
			title: 'Title orem ipsum dolor sit 2',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptatibus non, tempore explicabo veritatis earum provident officia, iure reprehenderit aut, totam, aspernatur dolores dolorum veniam odit delectus minus temporibus quia?',
			summary: 'Up branch to easily missed by do. Admiration considered acceptance too led one melancholy expression. Are will took form the nor true. Winding enjoyed minuter her letters evident use eat colonel. He attacks observe mr cottage inquiry am examine gravity. Are dear but near left was. Year kept on over so as this of. She steepest doubtful betrayed formerly him. Active one called uneasy our seeing see cousin tastes its. Ye am it formed indeed agreed relied piqued.',
			autor: 'John Joe',
			twitter: '@mattiasmilos',
			imagePath: 'https://source.unsplash.com/collection/148982/1599.9x900?v=2',
			date: '20 de Enero 2018',
			topBgImgHeader: '-175%',
			country: ' Switzerland',
			city: 'Zermatt'
		},
		{
			id: 3,
			title: 'Title orem ipsum dolor sit 3',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptatibus non, tempore explicabo veritatis earum provident officia, iure reprehenderit aut, totam, aspernatur dolores dolorum veniam odit delectus minus temporibus quia?',
			summary: 'Up branch to easily missed by do. Admiration considered acceptance too led one melancholy expression. Are will took form the nor true. Winding enjoyed minuter her letters evident use eat colonel. He attacks observe mr cottage inquiry am examine gravity. Are dear but near left was. Year kept on over so as this of. She steepest doubtful betrayed formerly him. Active one called uneasy our seeing see cousin tastes its. Ye am it formed indeed agreed relied piqued.',
			autor: 'John Joe',
			twitter: '@mattiasmilos',
			imagePath: 'https://source.unsplash.com/collection/148982/1599.9x900?v=3',
			date: '20 de Enero 2018',
			topBgImgHeader: '-175%',
			country: ' Switzerland',
			city: 'Zermatt'
		},
		{
			id: 4,
			title: 'Title orem ipsum dolor sit 4',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptatibus non, tempore explicabo veritatis earum provident officia, iure reprehenderit aut, totam, aspernatur dolores dolorum veniam odit delectus minus temporibus quia?',
			summary: 'Up branch to easily missed by do. Admiration considered acceptance too led one melancholy expression. Are will took form the nor true. Winding enjoyed minuter her letters evident use eat colonel. He attacks observe mr cottage inquiry am examine gravity. Are dear but near left was. Year kept on over so as this of. She steepest doubtful betrayed formerly him. Active one called uneasy our seeing see cousin tastes its. Ye am it formed indeed agreed relied piqued.',
			autor: 'John Joe',
			twitter: '@mattiasmilos',
			imagePath: 'https://source.unsplash.com/collection/148982/1599.9x900?v=4',
			date: '20 de Enero 2018',
			topBgImgHeader: '-175%',
			country: ' Switzerland',
			city: 'Zermatt'
		},
		{
			id: 5,
			title: 'Title orem ipsum dolor sit 5',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptatibus non, tempore explicabo veritatis earum provident officia, iure reprehenderit aut, totam, aspernatur dolores dolorum veniam odit delectus minus temporibus quia?',
			summary: 'Up branch to easily missed by do. Admiration considered acceptance too led one melancholy expression. Are will took form the nor true. Winding enjoyed minuter her letters evident use eat colonel. He attacks observe mr cottage inquiry am examine gravity. Are dear but near left was. Year kept on over so as this of. She steepest doubtful betrayed formerly him. Active one called uneasy our seeing see cousin tastes its. Ye am it formed indeed agreed relied piqued.',
			autor: 'John Joe',
			twitter: '@mattiasmilos',
			imagePath: 'https://source.unsplash.com/collection/148982/1599.9x900?v=5',
			date: '20 de Enero 2018',
			topBgImgHeader: '-175%',
			country: ' Switzerland',
			city: 'Zermatt'
		}
	];
	public getBlogs() {
		return this.blogs;
	}
	public detailBlog(id){
		return this.blogs.find((blog) => {
			return blog.id == id 
		});
	}
  constructor() { }

}
