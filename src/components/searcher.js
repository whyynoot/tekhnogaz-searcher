import React, { useState } from 'react';
import { Table, Image, Form, Button, Container, Spinner} from 'react-bootstrap';

const Loading = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
};


const ResultTable = ({ results }) => {
  return (
    <Table striped bordered hover responsive>
      <colgroup>
        <col style={{ width: '20%' }} /> 
        <col style={{ width: '20%' }} /> 
        <col style={{ width: '20%' }} /> 
        <col style={{ width: '20%' }} /> 
        <col style={{ width: '20%' }} />
      </colgroup>
      <thead>
        <tr>
          <th className="text-center">
              URL
          </th>
          <th className="text-center">Photo</th>
          <th className="text-center">Region</th>
          <th className="text-center">Relevance</th>
          <th className="text-center">Content Analysis</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={index}>
            <td style={{ maxWidth: '100px' }}>
              <a href={result.url} target="_blank" rel="noopener noreferrer" style={{ wordWrap: 'break-word' }}>
                {result.url}
              </a>
            </td>
            <td>
              {result.photo && (
                <Image src={result.photo} alt="error loading or getting photo" style={{ maxWidth: '100px' }} />
              )}
            </td>
            <td>{result.region}</td>
            <td>{result.relevance}</td>
            <td>{result.content_analysis}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const SearchForm = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [positiveKeywords, setPositiveKeywords] = useState('');
  const [negativeKeywords, setNegativeKeywords] = useState('');

  return (
    <Container className="my-5">
      <div class="base_header"><span><small class="bor_header_left"></small>О ПРОДУКТЕ<small class="bor_header_right"></small></span>
            {/* <h3>Поисковик</h3> */}
      </div>
      <div class="base_footer">
          <p>Мы предоставляем мощное решение для поиска и анализа информации в онлайн-мире. Наша платформа позволяет выполнять поисковые запросы, анализировать веб-контент, и хранить результаты в удобной базе данных. С ее помощью вы сможете быстро находить релевантные данные и интегрировать платформу в свои процессы благодаря открытому API.</p>
          <p>Документация доступна по ссылке</p>
      </div>
      <a href='/searcher/documentation'><Button variant="primary" className="mb-3">
        Перейти к документации
      </Button></a>
      
      < br />< br />< br />
       <h3>Поисковик</h3>< br />< br />

      <Form className="d-grid gap-2">
        <Form.Group className="mb-3">
          <Form.Label>Что ищите?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите ваш запрос"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Позитивные кейворды:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите позитивные кейворды"
            value={positiveKeywords}
            onChange={(e) => setPositiveKeywords(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Негативные кейворды:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите негативные кейворды"
            value={negativeKeywords}
            onChange={(e) => setNegativeKeywords(e.target.value)}
          />
        </Form.Group>

        <Button className="mb-3" variant="outline-success" onClick={() => handleSearch(searchQuery, positiveKeywords, negativeKeywords)}>
          Search
        </Button>
      </Form>
    </Container>
  );
};

const SearchPage = () => {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [status, setStatus] = useState('');
  
    const handleSearch = async (searchQuery, positiveKeywords, negativeKeywords) => {
        setLoading(true);
        const requestData = {
          query: searchQuery,
          positive: positiveKeywords,
          negative: negativeKeywords,
        };
      
        try {
          const response = await fetch('/api/create_task/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
          });
      
          const { id: taskUUID } = await response.json();
      
          let currentStatus = 'working';
          while (currentStatus !== 'done' || currentStatus !== "failed") {
            await new Promise((resolve) => setTimeout(resolve, 5000));
            const statusResponse = await fetch(`/api/check_for_task/${taskUUID}/`);
            const { status, result } = await statusResponse.json();
            currentStatus = status;
      
            if (currentStatus === 'done') {
              setResults(result);
              setStatus(currentStatus);
              break;
            }
            if (currentStatus === "failed"){
                setResults(result);
                setStatus(currentStatus);
            }
          }
        } catch (error) {
          console.error('Error:', error);
        }
      
        setLoading(false);
    };
  
    return (
      <Container className="my-5">
        <SearchForm handleSearch={handleSearch} />
  
        {loading ? <Loading /> : null}
  
        {status === 'done' && results.length > 0 && <ResultTable results={results} />}
      </Container>
    );
  };
  
export default SearchPage;