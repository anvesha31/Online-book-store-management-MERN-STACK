import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4 bg-gradient-to-b from-yellow-100 to-yellow-300 min-h-screen'>
      <BackButton />
      <h1 className='text-3xl my-4 text-blaclk-500 font-bold'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-yellow-400 rounded-xl p-4 mx-auto max-w-md'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-700'>Id:</span>
            <span className='text-lg font-bold'>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-700'>Title:</span>
            <span className='text-lg font-bold'>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-700'>Author:</span>
            <span className='text-lg font-bold'>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-700'>Publish Year:</span>
            <span className='text-lg font-bold'>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-700'>Create Time:</span>
            <span className='text-lg font-bold'>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-700'>Last Update Time:</span>
            <span className='text-lg font-bold'>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
