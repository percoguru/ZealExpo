import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { db } from '../config';
import RankCard from './Cards/RankCard';


class LeaderBoard extends Component{
    constructor() {
        super();
        this.state = {
            CSE: {
                wins: null,
                losses: null,
                points: null
            },
            EEE: {
                wins: null,
                losses: null,
                points: null
            },
            ECE: {
                wins: null,
                losses: null,
                points: null
            },
        }
      }
    addBranch() {
        db.ref('/Branches').push({
          wins: 99,
          losses: 1,
        });
      }
    
    componentDidMount() {

        db.ref('/Branches/CSE').on('value', querySnapShot => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let Wins = data.wins;
            let Losses = data.losses;
            let Points = data.points;
            this.setState({
              CSE: {
                  wins: Wins,
                  losses: Losses,
                  points: Points
              }
            });
          });
        db.ref('/Branches/ECE').on('value', querySnapShot => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let Wins = data.wins;
            let Losses = data.losses;
            let Points = data.points;
            this.setState({
              ECE: {
                  wins: Wins,
                  losses: Losses,
                  points: Points
              }
            });
          });
          db.ref('/Branches/EEE').on('value', querySnapShot => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let Wins = data.wins;
            let Losses = data.losses;
            let Points = data.points;
            this.setState({
              EEE: {
                  wins: Wins,
                  losses: Losses,
                  points: Points
              }
            });
          });
   }

    render() {
        if (this.state.CSE.points >= this.state.ECE.points && this.state.ECE.points >= this.state.EEE.points)
        return (
            <ScrollView style={{ flex: 1 }}>
            <RankCard name="CSE" wins={this.state.CSE.wins} losses={this.state.CSE.losses} points={this.state.CSE.points} rank='1'/>
            <RankCard name="ECE" wins={this.state.ECE.wins} losses={this.state.ECE.losses} points={this.state.ECE.points} rank='2'/>
            <RankCard name="EEE" wins={this.state.EEE.wins} losses={this.state.EEE.losses} points={this.state.EEE.points} rank='3'/>
            </ScrollView>
        )
        else if (this.state.CSE.points >= this.state.EEE.points && this.state.EEE.points >= this.state.ECE.points)
        return (
            <ScrollView style={{ flex: 1 }}>
            <RankCard name="CSE" wins={this.state.CSE.wins} losses={this.state.CSE.losses} points={this.state.CSE.points} rank='1'/>
            <RankCard name="EEE" wins={this.state.EEE.wins} losses={this.state.EEE.losses} points={this.state.EEE.points} rank='2'/>
            <RankCard name="ECE" wins={this.state.ECE.wins} losses={this.state.ECE.losses} points={this.state.ECE.points} rank='3'/>
            </ScrollView>
        )
        else if (this.state.EEE.points >= this.state.ECE.points && this.state.ECE.points >= this.state.CSE.points)
        return (
            <ScrollView style={{ flex: 1 }}>
            <RankCard name="EEE" wins={this.state.EEE.wins} losses={this.state.EEE.losses} points={this.state.EEE.points} rank='1'/>
            <RankCard name="ECE" wins={this.state.ECE.wins} losses={this.state.ECE.losses} points={this.state.ECE.points} rank='2'/>
            <RankCard name="CSE" wins={this.state.CSE.wins} losses={this.state.CSE.losses} points={this.state.CSE.points} rank='3'/>
            </ScrollView>
        )
        else if (this.state.EEE.points >= this.state.CSE.points && this.state.CSE.points >= this.state.ECE.points)
        return (
            <ScrollView style={{ flex: 1 }}>
            <RankCard name="EEE" wins={this.state.EEE.wins} losses={this.state.EEE.losses} points={this.state.EEE.points} rank='1'/>
            <RankCard name="CSE" wins={this.state.CSE.wins} losses={this.state.CSE.losses} points={this.state.CSE.points} rank='2'/>
            <RankCard name="ECE" wins={this.state.ECE.wins} losses={this.state.ECE.losses} points={this.state.ECE.points} rank='3'/>
            </ScrollView>
        )
        else if (this.state.ECE.points >= this.state.CSE.points && this.state.CSE.points >= this.state.EEE.points)
        return (
            <ScrollView style={{ flex: 1 }}>
            <RankCard name="ECE" wins={this.state.ECE.wins} losses={this.state.ECE.losses} points={this.state.ECE.points} rank='1'/>
            <RankCard name="CSE" wins={this.state.CSE.wins} losses={this.state.CSE.losses} points={this.state.CSE.points} rank='2'/>
            <RankCard name="EEE" wins={this.state.EEE.wins} losses={this.state.EEE.losses} points={this.state.EEE.points} rank='3'/>
            </ScrollView>
        )
        else if (this.state.ECE.points >= this.state.EEE.points && this.state.EEE.points >= this.state.CSE.points)
        return (
            <ScrollView style={{ flex: 1 }}>
            <RankCard name="ECE" wins={this.state.ECE.wins} losses={this.state.ECE.losses} points={this.state.ECE.points} rank='1'/>
            <RankCard name="EEE" wins={this.state.EEE.wins} losses={this.state.EEE.losses} points={this.state.EEE.points} rank='2'/>
            <RankCard name="CSE" wins={this.state.CSE.wins} losses={this.state.CSE.losses} points={this.state.CSE.points} rank='3'/>
            </ScrollView>
        )
        else
        return (
            <ScrollView style={{ flex: 1 }}>
            <RankCard name="CSE" wins={this.state.CSE.wins} losses={this.state.CSE.losses} points={this.state.CSE.points} rank='1'/>
            <RankCard name="ECE" wins={this.state.ECE.wins} losses={this.state.ECE.losses} points={this.state.ECE.points} rank='2'/>
            <RankCard name="EEE" wins={this.state.EEE.wins} losses={this.state.EEE.losses} points={this.state.EEE.points} rank='3'/>
            </ScrollView>
        )

    }
};

export default LeaderBoard;