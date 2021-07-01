var js_form_nome, js_form_email, js_form_telefone, js_form_mensagem;

function envia_dados(){
    js_form_nome = document.getElementById('form_nome').value;
    js_form_email = document.getElementById('form_email').value;
    js_form_telefone = document.getElementById('form_telefone').value;
    js_form_mensagem = document.getElementById('form_mensagem').value;

    if(js_form_nome == '' || js_form_email == '' || js_form_telefone == '' || js_form_mensagem == ''){
        alert('Todos os campos são Obrigatórios !');
    }else{
        alert('Seja bem vindo: '+js_form_nome+'\n\n'+'Suas informações foram enviadas com SUCESSO !\n\n'+
        'Nome: '+js_form_nome+'\nTelefone: '+js_form_telefone+'\nEmail: '+js_form_email+'\nMensagem: '+js_form_mensagem);

        document.getElementById('form_nome').value='';
        document.getElementById('form_email').value='';
        document.getElementById('form_telefone').value='';
        document.getElementById('form_mensagem').value='';
    }    
}   