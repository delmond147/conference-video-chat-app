import React, {useState, useEffect, useContext} from 'react';
import Modal from 'react-modal';
import {Line} from 'rc-progress';
import styles from './pollStyle';

import {PollContext} from './PollContext';

const Poll = () => {
  const {
    question,
    setQuestions,
    answers: voteDate,
    setAnswers,
    isModalOpen,
    setIsModalOpen,
  } = useContext(PollContext);
  const [totalVotes, setTotalVotes] = useState(0);
  const [voted, setVoted] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setTotalVotes(0);
    setVoted(false);
    setQuestions('');
    setAnswers([
      {option: '', votes: 0},
      {option: '', votes: 0},
      {option: '', votes: 0},
      {option: '', votes: 0},
    ]);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      content="Poll Modal"
      style={styles.customStyles}>
      <div>
        <h1>{question}</h1>
      </div>
    </Modal>
  );
};

export default Poll;
