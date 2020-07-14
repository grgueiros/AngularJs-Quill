import imagens from '../../assets/imagens/imagens';
import logos from '../../assets/logos/logos';

class HomeController {
  constructor() {
    this.name = 'home';
		this.defineEditores();
		this.imagens = imagens;
		this.imagem = this.imagens[0];
		this.logos = logos;
		this.logo= this.logos[0];
		this.modalImagens = false;
		this.modalLogos = false;
	}

	escolheImagem(id) {
		this.imagem = this.imagens.find(imagem => imagem.id == id);
	}

	escolheLogo(id) {
		this.logo = this.logos.find(logo => logo.id == id);
	}

	toggleImagens() {
			this.modalImagens = !this.modalImagens;
	}

	toggleLogos() {
		this.modalLogos = !this.modalLogos;
	}

	defineEditores() {

		let editorMarca = new Quill('#marca', {
			modules: {
				toolbar: [
					[{ header: [1, 2, false] }],
					['bold', 'italic', 'underline'],
					['code-block']
				]
			},
			theme:'bubble'
		});


		let editorTitulo = new Quill('#titulo', {
			modules: {
				toolbar: [
					[{ header: [1, 2, false] }],
					['bold', 'italic', 'underline'],
					['code-block']
				]
			},
			theme:'bubble'
		});

		let editorUrl = new Quill('#url', {
			modules: {
				toolbar: [
					[{ header: [1,2,false] }],
					['bold','italic','underline'],
					['code-block']
				]
			},
			theme: 'bubble'
		});
	}
}

export default HomeController;
