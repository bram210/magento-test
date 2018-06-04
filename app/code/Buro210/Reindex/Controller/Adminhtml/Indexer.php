<?php
/**
 * Copyright © 2017 BURO210. All rights reserved.
 *
 */
namespace Buro210\Reindex\Controller\Adminhtml;

abstract class Indexer extends \Magento\Backend\App\Action
{
    /**
     * Check ACL permissions
     *
     * @return bool
     */
    protected function _isAllowed()
    {
        switch ($this->_request->getActionName()) {
            case 'reindexInit':
                return $this->_authorization->isAllowed('Magento_Indexer::changeMode');
        }

        return false;
    }
}
