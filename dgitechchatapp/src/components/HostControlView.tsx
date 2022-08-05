import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import chatContext, {controlMessageEnum} from './ChatContext';
import ColorContext from './ColorContext';
import SecondaryButton from '../atoms/SecondaryButton';
import TextInput from '../atoms/TextInput';
import {PollContext} from './PollContext';
import PrimaryButton from '../atoms/TextInput';

const HostControlView = () => {
  const {sendControlMessage} = useContext(chatContext);
  const {primaryColor} = useContext(ColorContext);
  const {question, setQuestion, answers, setAnswers, setIsModalOpen} =
    useContext(PollContext);
  return (
    <>
      <Text style={style.heading}>Host Controls</Text>
      <View>
        <View style={style.btnContainer}>
          <SecondaryButton
            onPress={() => sendControlMessage(controlMessageEnum.muteAudio)}
            text={'Mute all audios'}
          />
        </View>
        <View style={style.btnContainer}>
          <SecondaryButton
            onPress={() => sendControlMessage(controlMessageEnum.muteVideo)}
            text={'Mute all videos'}
          />
        </View>
        <Text style={style.heading}>Create a Poll</Text>
        <View style={{marginTop: '20px'}}>
          <TextInput
            value={question}
            onChange={setQuestion}
            placeholder="Poll Question"
          />
          <br />
          {answers.map((answer, i) => (
            <div key={i}>
              <br />
              <TextInput
                value={answer.option}
                onChangeText={(value) =>
                  setAnswers([
                    ...answers.slice(0, i),
                    {option: value, votes: 0},
                    ...answers.slice(i + 1),
                  ])
                }
                placeholder={`Poll Answer ${i + 1}`}
              />
            </div>
          ))}
        </View>
        <View style={style.btnContainer}>
          <PrimaryButton
            onPress={() => {
              setIsModalOpen(true);
            }}
            text="Start Poll"
          />
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: $config.PRIMARY_FONT_COLOR,
    // marginBottom: 20,
    alignSelf: 'center',
  },
  btnContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
});

export default HostControlView;
