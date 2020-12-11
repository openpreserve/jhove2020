/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */

import React from 'react';
import { connect } from 'react-redux';
import { Container, Card, CardTitle, FormGroup, Input, CardBody, Label } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { green } from '@material-ui/core/colors';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { setTool } from '../../Redux/redux-reducers';

const Tools = props => {
  const { actions } = props;
  const { t } = useTranslation();
  const PDFArray = [];
  const JPEGArray = [];
  actions
    .filter(e => e.inputExtension.accept.includes('application/pdf'))
    .forEach(e => {
      e.tool.forEach(tool => PDFArray.push(tool.toolName));
    });
  actions
    .filter(e => e.inputExtension.accept.includes('image/jpeg'))
    .forEach(e => {
      e.tool.forEach(tool => JPEGArray.push(tool.toolName));
    });
  return (
    <Container>
      <div className="d-flex flex-column align-items-left">
        <div className="d-flex w-50 flex-row align-items-center mb-5">
          <Link to="/">
            <ArrowBackIcon />
          </Link>
          <h3 className="m-0 ml-3 font-weight-bold">{t('Tools')}</h3>
        </div>
        <Card className="w-50 border-0">
          <CardBody>
            <CardTitle tag="h5" className="font-weight-bold">
              PDF:
            </CardTitle>
            <FormGroup className="mt-3 d-flex flex-row mb-3">
              <Label for="defaultTool" className="w-50 m-auto">
                <span>{t('defaultTool')}:</span>
              </Label>
              <Input type="select">
                {PDFArray.map((e, i) => (
                  <option key={i}>{e}</option>
                ))}
              </Input>
            </FormGroup>
            {actions.filter(e => e.active && e.inputExtension.accept.includes('application/pdf')).length ? (
              actions
                .filter(e => e.active && e.inputExtension.accept.includes('application/pdf'))[0]
                .tool.map((e, i) => (
                  <div className="d-flex flex-row w-50 mb-3" key={i + 10 / 0.4}>
                    <CheckCircleOutlineIcon style={{ color: green[500] }} />
                    <span className="ml-1">{e.toolName}</span>
                  </div>
                ))
            ) : (
              <span>{t('noDefaultTools')}</span>
            )}
          </CardBody>
        </Card>
        <Card className="w-50 border-0">
          <CardBody>
            <CardTitle tag="h5" className="font-weight-bold">
              Image:
            </CardTitle>
            <FormGroup className="mt-3 d-flex flex-row mb-3">
              <Label for="defaultTool" className="w-50 m-auto">
                <span>{t('defaultTool')}:</span>
              </Label>
              <Input type="select">
                {JPEGArray.map((e, i) => (
                  <option key={(i * 2) / 0.4}>{e}</option>
                ))}
              </Input>
            </FormGroup>
            {actions.filter(e => e.active && e.inputExtension.accept.includes('image/jpeg')).length ? (
              actions
                .filter(e => e.active && e.inputExtension.accept.includes('image/jpeg'))[0]
                .tool.map((e, i) => (
                  <div className="d-flex flex-row w-50 mb-3" key={i}>
                    <CheckCircleOutlineIcon style={{ color: green[500] }} />
                    <span className="ml-1">{e.toolName}</span>
                  </div>
                ))
            ) : (
              <span>{t('noDefaultTools')}</span>
            )}
          </CardBody>
        </Card>
      </div>
    </Container>
  );
};

const mapStateToProps = state => ({
  actions: state.actions,
  outputFolder: state.outputFolder,
  url: state.url,
  fileOrigin: state.fileOrigin,
  fileName: state.fileName,
  filePath: state.filePath,
  dirPath: state.dirPath,
  tool: state.tool,
});

export default connect(mapStateToProps, {})(Tools);
