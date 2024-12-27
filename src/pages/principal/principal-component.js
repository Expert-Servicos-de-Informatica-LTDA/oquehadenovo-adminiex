// Principal.js
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  Container,
  Header,
  HeaderContent,
  Logo,
  TitleContainer,
  Title,
  Subtitle,
  MainContent,
  VersionList,
  VersionItem,
  VersionButton,
  VersionContent,
  UpdateList,
  UpdateItem
} from './styles';
import LogoAdmin from '../../assets/logo.png';

const Principal = () => {
  const [versaoAtiva, setVersaoAtiva] = useState('versao81');

  const versoes = {
    'versao81': {
      versao: '8.1',
      atualizacoes: [
          'Nova versão 8.1'
        ]
    },
    'versao80': {
      versao: '8.0',
      atualizacoes: [
          'Nova versão 8.0'
        ]
    },
    'versao75': {
      versao: '7.5',
      atualizacoes: [
        'Emissão de Fatura de locação. Gerando boleto.',
        'Financeiro: Não deixa baixar com data de pagamento menor que a data de emissão.',
        'Principal: Notificação para notas não enviadas ou tentativa de envio.',
        'CadProduto: grava código do benefício fiscal no cadastro do produto.',
        'Correção de bugs e melhorias.'
      ]
    },
    'versao74': {
      versao: '7.4',
      atualizacoes: ['versão 7.4']
    }
  };

  const alternarVersao = (idVersao) => {
    setVersaoAtiva(versaoAtiva === idVersao ? '' : idVersao);
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          <a 
            href="http://www.expertme.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo src={LogoAdmin} alt="Logo ExpertMe" />
          </a>
          <TitleContainer>
            <Title>AdminiEx</Title>
            <Subtitle>Clique na versão para ver as novidades!</Subtitle>
          </TitleContainer>
        </HeaderContent>
      </Header>

      <MainContent>
        <VersionList>
          {Object.entries(versoes).map(([idVersao, dados]) => (
            <VersionItem key={idVersao}>
              <VersionButton
                onClick={() => alternarVersao(idVersao)}
                aria-expanded={versaoAtiva === idVersao}
                aria-controls={`conteudo-${idVersao}`}
              >
                <span>Versão {dados.versao}</span>
                {versaoAtiva === idVersao ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </VersionButton>
              
              <VersionContent
                id={`conteudo-${idVersao}`}
                isActive={versaoAtiva === idVersao}
              >
                <UpdateList>
                  {dados.atualizacoes.map((atualizacao, indice) => (
                    <UpdateItem key={indice}>
                      {atualizacao}
                    </UpdateItem>
                  ))}
                </UpdateList>
              </VersionContent>
            </VersionItem>
          ))}
        </VersionList>
      </MainContent>
    </Container>
  );
};

export default Principal;
