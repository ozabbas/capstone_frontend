import React from "react";
import { Card, Button } from "react-bootstrap";
import './Player.css';

function PlayerCard({ player, buttonOnClick, buttonText }) {
  return (
    <>
      <Card style={{ width: '14rem' }}>
        {/* <Card.Img variant="top" src="/images/mickeymantle.jpeg" /> */}
        <Card.Body>
          <Card.Title>{player.name}</Card.Title>
          <Card.Text>
            <p className="statsText">{player.team_name}</p>
            <p className="statsText">Position: {player.position}</p>
            <p className="statsText">AB: {player.ab}</p>
            <p className="statsText">R: {player.r}</p>
            <p className="statsText">H: {player.h}</p>
            <p className="statsText">HR:{player.r}</p>
            <p className="statsText">RBI: {player.rbi}</p>
            <p className="statsText">SB: {player.sb}</p>
            <p className="statsText">AVG: {player.avg}</p>
            <p className="statsText">OBP: {player.obp}</p>
            <p className="statsText">WPCT: {player.wpct}</p>
            <p className="statsText">ERA: {player.era}</p>
            <p className="statsText">G: {player.g}</p>
            <p className="statsText">GS: {player.gs}</p>
            <p className="statsText">SV: {player.sv}</p>
            <p className="statsText">IP: {player.ip}</p>
            <p className="statsText">SO: {player.so}</p>
            <p className="statsText">WHIP: {player.whip}</p>
          </Card.Text>
          {buttonText && (
            <Button
              variant="primary"
              onClick={() => buttonOnClick(player)} >
              {buttonText}
            </Button>
          )}

        </Card.Body>
      </Card>
    </>
  );
}
export default PlayerCard;

//Player.create(name: name, team_name: team_name, position: position, ab: at_bats, r: runs, h: hits, home_run: home_run, rbi: rbi, sb: stolen_bases, avg: average, obp: obp, ops: ops, wpct: wpct, era: era, g: g, gs: gs, sv: sv, ip: ip, so: so, whip: whip)