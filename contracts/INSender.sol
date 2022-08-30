// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface INSender {

    function ethFee() external returns(uint256);

    function sendToken(address _token, address[] memory _payees, uint256[] memory _amounts) payable external;

}
