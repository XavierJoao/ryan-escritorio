import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { nome, email, telefone, mensagem } = await request.json();

    // Validação básica
    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: 'Nome, email e mensagem são obrigatórios' },
        { status: 400 }
      );
    }

    // Aqui você pode implementar o envio do email
    // Por exemplo, usando um serviço como SendGrid, Mailgun, etc.
    console.log('Nova mensagem recebida:', {
      nome,
      email,
      telefone,
      mensagem,
      timestamp: new Date().toISOString()
    });

    // Simulação de processamento
    // Em produção, substitua por código real de envio de email

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar mensagem:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}